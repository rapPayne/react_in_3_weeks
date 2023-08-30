import { useNavigate } from 'react-router-dom';
export function Orders() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Order #</th>
            <th>Date/Time</th>
            <th>Total</th>
            <th># Guests</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={() => navigate(`/orders/12345`)}>
            <td>ORDER_ID_HERE</td>
            <td>ORDER_TIME_HERE</td>
            <td>ORDER_TOTAL_HERE</td>
            <td>NUMBER_OF_DINERS_HERE</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}