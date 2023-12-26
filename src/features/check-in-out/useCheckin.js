import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking as updateBookingApi } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkinGuest, isLoading: isCheckingin } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBookingApi(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { checkinGuest, isCheckingin };
}

export default useCheckin;
