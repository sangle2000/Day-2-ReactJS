export default function Profile({ name }) {
  console.log(name);
  return (
    <div className="container">
      <img
        src="https://i.9mobi.vn/cf/Images/tt/2021/8/20/anh-avatar-dep-56.jpg"
        alt="Avatar"
        width={120}
        height={120}
      />
      <h3>{name}</h3>
      <button className="visit-profile">Visit Profile</button>
    </div>
  );
}
