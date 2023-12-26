import { useQueryClient } from "@tanstack/react-query";
import { PAGE_SIZE } from "../../utils/constants";
import { getBookings } from "../../services/apiBookings";

export function usePrefetchData({ page, options }) {
  const queryClient = useQueryClient();
  const pageCount = Math.ceil(options.count / PAGE_SIZE);

  if (page < pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", options.filter, options.sortBy, page + 1],
      queryFn: () =>
        getBookings({
          filter: options["filter"],
          sortBy: options["filter"],
          page: page + 1,
        }),
    });
  }

  if (page > pageCount) {
    queryClient.prefetchQuery({
      queryKey: ["bookings", options.filter, options.sortBy, page - 1],
      queryFn: () =>
        getBookings({
          filter: options["filter"],
          sortBy: options["filter"],
          page: page - 1,
        }),
    });
  }
}
