import React from "react";

const ProfilePage = () => {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow overflow-y-auto">
        <div className="p-6 border-b">
          <h1 className="text-xl font-medium mb-1">Account Settings</h1>
        </div>
        
        <div className="p-6 border-b flex items-start">
          <div className="relative mr-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img 
                src="/profile.png" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center text-white text-xs">
              i
            </div>
          </div>
          
          <div>
            <h2 className="font-medium">Marry Doe</h2>
            <p className="text-gray-500">Marry@Gmail.Com</p>
          </div>
        </div>
        
        <div className="p-6">
          <p className="text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage