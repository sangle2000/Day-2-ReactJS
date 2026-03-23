import "./App.css";
import Profile from "./components/Profile";

const profiles = [
  {
    id: 1,
    name: "Nguyễn Văn A",
  },
  {
    id: 2,
    name: "Nguyễn Văn B",
  },
  {
    id: 3,
    name: "Nguyễn Văn C",
  },
  {
    id: 4,
    name: "Nguyễn Văn D",
  },
  {
    id: 5,
    name: "Nguyễn Văn E",
  },
  {
    id: 6,
    name: "Nguyễn Văn F",
  },
];

export default function App() {
  return (
    <>
      <div className="wrapper">
        {profiles.map((profile) => {
          // console.log(profile.name);
          return <Profile key={profile.id} userName={profile.name} />;
        })}
      </div>
    </>
  );
}
