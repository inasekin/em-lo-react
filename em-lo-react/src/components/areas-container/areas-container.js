import React from "react";
import { withAreaConsumer } from "../../context";
import AreasList from "../areas-list";

function AreaContainer({ context }) {
  const { areas } = context;
  return (
    <>
        <div className="container">
            <AreasList areas={areas} />
        </div>
    </>
  );
}

export default withAreaConsumer(AreaContainer);

// import React from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// export default function RoomContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, setRoom, sortedRooms,rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <>
//             <RoomsFilter rooms={rooms} />
//             <RoomsList rooms={sortedRooms} setRoom={setRoom} />
//           </>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
