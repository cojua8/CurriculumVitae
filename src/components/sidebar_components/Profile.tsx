import { useContext } from "react";
import { dataContext } from "../contexts/DataContext";

const Profile = () => {
  const profileData = useContext(dataContext).profile;

  return (
    <div>
      {profileData.map((paragraph: string) => {
        return <p>{paragraph}</p>;
      })}
    </div>
  );
};

export default Profile;
