import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, confirmedStays, numDays, cabinCounts }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => cur.totalPrice + acc, 0);
  const checkIns = confirmedStays.length;

  const Occupancy =
    confirmedStays.reduce((acc, cur) => cur.numNights + acc, 0) /
    (numDays * cabinCounts);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkIns}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(Occupancy * 100) + "%"}
      />
    </>
  );
}

export default Stats;
