import React from 'react'

const LoadingIndicator = () => {

    const { users, error, isLoading} = useUsers();

  return (
    <div>
      Loading Indicator
      {/* get User from the useState */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
        {error && <p className="text-danger">{error}</p>}
        {isLoading && <div className="spinner-border"></div>}
      </ul>
    </div>
  )
}

export default LoadingIndicator
