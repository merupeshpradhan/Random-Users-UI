import { useEffect, useState } from "react";
import UserFullDetials from "./UserFullDetials.jsx";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      // Fetching 12 users for a nice grid
      const url = "https://api.freeapi.app/api/v1/public/randomusers";
      try {
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data.data.data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    loadUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            👥 Random Users UI
          </h1>
          <p className="text-lg text-gray-600">
            Web Dev Cohort 2026 - Rupesh Pradhan
          </p>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mb-4"></div>
            <p className="text-xl text-gray-600">Loading Profiles...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <div
                key={user.login.uuid}
                className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center"
              >
                <img
                  src={user.picture.large}
                  alt="user"
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-indigo-200"
                />
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {user.name.first} {user.name.last}
                </h2>
                <p className="text-gray-600 mb-4">{user.email}</p>

                <button
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                  onClick={() => setSelectedUser(user)}
                >
                  View Details ➜
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Centered Modal */}
      <UserFullDetials
        user={selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </div>
  );
}

export default App;
