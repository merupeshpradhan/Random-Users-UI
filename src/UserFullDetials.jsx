import React from "react";

function UserFullDetials({ user, onClose }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
        >
          ✕
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <img
              src={user.picture.large}
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-indigo-200"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {user.name.title} {user.name.first} {user.name.last}
            </h2>
            <p className="text-gray-600">@{user.login.username}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-800">{user.email}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div>
                <p className="text-sm text-gray-500">Phone / Cell</p>
                <p className="text-gray-800">
                  {user.phone} / {user.cell}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl">📍</span>
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-800">
                  {user.location.city}, {user.location.country}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-2xl">🎂</span>
              <div>
                <p className="text-sm text-gray-500">Age & Gender</p>
                <p className="text-gray-800">
                  {user.dob.age} years old • {user.gender}
                </p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Close Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserFullDetials;
