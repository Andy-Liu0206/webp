import React, { useEffect, useState } from "react";
import Story from "./Story";
import faker from "faker";
import { useSession } from "next-auth/react";

function Stories() {
  const [suggtions, setSuggestions] = useState([]);
  const { data: session } = useSession();
  useEffect(() => {
    const suggtions = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggtions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {session && (
            <Story img={session.user.image} username={session.user.username}/>
        )}

      {suggtions?.map((profile) => (
        <Story
          key={profile.id}
          img="https://ui-avatars.com/api/?name=profile.username"
          username={profile.username}
        />
      ))}
    </div>
  );
}

export default Stories;
