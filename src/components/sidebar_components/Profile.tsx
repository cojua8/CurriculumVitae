import { useContext } from "react";
import { dataContext } from "../contexts/DataContext";

const Profile = () => {
  const profileData: string[] = useContext(dataContext).profile;

  return (
    <div>
      {profileData.map((paragraph: string, index) => {
        return <p key={index}>{paragraph}</p>;
      })}
    </div>
  );
};

export default Profile;
