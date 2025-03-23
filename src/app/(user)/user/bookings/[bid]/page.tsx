
export default function BookingDetailPage({
  params,
}: {
  params: { bid: string };
}) {
  const mockBookings = new Map();
  mockBookings.set("1", {
    id: "1",
    hotelName: "Chabatai Hotel1",
    checkIn: "10/09/2024",
    checkOut: "12/09/2024",
    location: "Bangkok, Thailand",
  });
  mockBookings.set("2", {
    id: "2",
    hotelName: "Chabatai Hotel2",
    checkIn: "10/09/2024",
    checkOut: "12/09/2024",
    location: "Bangkok, Thailand",
  });
  mockBookings.set("3", {
    id: "3",
    hotelName: "Chabatai Hotel3",
    checkIn: "10/09/2024",
    checkOut: "12/09/2024",
    location: "Bangkok, Thailand",
  });
  mockBookings.set("4", {
   id: "4",
   hotelName: "Chabatai Hotel4",
   checkIn: "10/09/2024",
   checkOut: "12/09/2024",
   location: "Bangkok, Thailand",
 });

  return (
    <main className="bg-white text-center p-5">
      <div className="flex flex-row my-5">
        <div className="text-2xl mx-5 text-black font-bold ">
          {mockBookings.get(params.bid).hotelName}
        </div>
      </div>
    </main>
  );

}
