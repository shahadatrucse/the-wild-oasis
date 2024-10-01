// import BookingRow from "../bookings/BookingRow";
import useBookings from "../bookings/useBookings";
import Table from "../../ui/Table";
import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import BookingRow from "./BookingRow";
import TestBookingRow from "./TestBookingRow";
import Pagination from "../../ui/Pagination";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();
  if (isLoading) return <Spinner />;
  if (!bookings.length) return <Empty />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>
        {
          <Table.Body
            data={bookings}
            render={(booking) => (
              <TestBookingRow key={booking.id} booking={booking} />
            )}
          />
        }
        {/* {<TestBookingRow book="ay bai" />} */}
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

// We could create yet another layer of abstraction on top of this. We could call this component just <Results>, like: Results({data, count, isLoading, columns, rowComponent}). Then <BookingTable> and ALL other tables would simply call that.
// BUT, creating more abstractions also has a cost! More things to remember, more complex codebase to understand. Sometimes it's okay to just copy and paste instead of creating abstractions

export default BookingTable;
