import Button from "../../ui/Button";
import useCheckout from "./useCheckout";

function CheckoutButton({ bookingId }) {
  const { checkOutGuest, checkingOut } = useCheckout();

  return (
    <Button
      onClick={() => checkOutGuest(bookingId)}
      $variation="primary"
      $size="small"
      disabled={checkingOut}
    >
      Check out
    </Button>
  );
}

export default CheckoutButton;
