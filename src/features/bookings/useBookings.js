import { useQuery } from "@tanstack/react-query";
import { getBookings } from "../../services/apiBookings";
import { useSearchParams } from "react-router-dom";
import { usePrefetchData } from "./usePrefectData";

function useBookings() {
  const [searchParams] = useSearchParams();
  const filteredValue = searchParams.get("status");
  const filter =
    !filteredValue || filteredValue === "all"
      ? null
      : { field: "status", value: filteredValue };

  const sortValue = searchParams.get("sortBy") || "startDate-desc";
  const [field, direction] = sortValue.split("-");

  const sortBy = { field, direction };

  const page = Number(searchParams.get("page")) || 1;

  const {
    data: { data: bookings, count } = {},
    isLoading,
    error,
  } = useQuery({
    queryKey: ["bookings", filter, sortBy, page],
    queryFn: () => getBookings({ filter, sortBy, page }),
  });

  const options = { filter: filter, sortBy: sortBy, count: count };
  usePrefetchData({ page, options });

  return { bookings, isLoading, error, count };
}

export default useBookings;
