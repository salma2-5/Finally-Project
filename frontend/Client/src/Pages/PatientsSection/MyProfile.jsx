import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const MyProfile = () => {
  const { id } = useParams(); // Get the user ID from the URL params
  const [userData, setUserData] = useState({
    name: "",
    image: "",
    email: "",
    phone: "",
    address: {
      line1: "",
      line2: "",
    },
    gender: "",
    dob: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user data based on the ID
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/users/${id}`); // API call to fetch user by ID
        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await response.json();
        setUserData(data); // Populate the state with fetched data
      } catch (err) {
        setError(err.message); // Handle errors
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]); // Re-fetch when the `id` changes

  // Handle saving the edited profile (you can adjust this logic to call your API)
  const handleSave = async () => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT", // PUT request to update user
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      // Optionally, you can update the state or show a success message
      alert("Profile updated successfully!");
      setIsEdit(false); // Exit the edit mode
    } catch (err) {
      setError(err.message); // Handle save errors
    }
  };

  // Show loading or error state if necessary
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center mb-6">
        <img
          src={userData.image}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover mb-4"
        />
        {isEdit ? (
          <input
            type="text"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="w-full p-2 border border-gray-300 rounded-md mb-4"
          />
        ) : (
          <p className="text-2xl font-semibold">{userData.name}</p>
        )}
      </div>

      <hr className="my-6" />

      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Contact Information</p>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Email:</p>
            <p>{userData.email}</p>
          </div>

          <div>
            <p className="font-medium">Phone:</p>
            {isEdit ? (
              <input
                type="text"
                value={userData.phone}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.phone}</p>
            )}
          </div>

          <div>
            <p className="font-medium">Address:</p>
            {isEdit ? (
              <>
                <input
                  type="text"
                  value={userData.address.line1}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line1: e.target.value },
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md mb-2"
                />
                <input
                  type="text"
                  value={userData.address.line2}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      address: { ...userData.address, line2: e.target.value },
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </>
            ) : (
              <p>{userData.address.line1}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg font-semibold mb-2">Basic Information</p>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Gender:</p>
            {isEdit ? (
              <select
                value={userData.gender}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{userData.gender}</p>
            )}
          </div>

          <div>
            <p className="font-medium">Date of Birth:</p>
            {isEdit ? (
              <input
                type="date"
                value={userData.dob}
                onChange={(e) =>
                  setUserData({ ...userData, dob: e.target.value })
                }
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            ) : (
              <p>{userData.dob}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        {isEdit ? (
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Save Information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Edit
          </button>
        )}

        <Link
          to="/myappointments"
          className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-200"
        >
          Check My Appointments
        </Link>
      </div>
    </div>
  );
};

export default MyProfile;
