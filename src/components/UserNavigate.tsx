const UserNavigate: React.FC = () => {
  return (
    <div className="w-64 h-[515px] relative flex flex-col items-center">
      <div className="w-44 h-44 bg-sky-800 rounded-full"></div>
      {/**profile*/}
    <div className="mt-2 justify-start text-sky-800 text-3xl font-semibold mb-10">Name of User</div>
    <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-8">
      <div className="w-4 h-4 bg-sky-800 rounded-full mr-4"></div>
      <span className="text-sky-800 text-xl font-semibold">Dashboard</span>
    </button>
    <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-8">
      <div className="w-4 h-4 bg-sky-800 rounded-full mr-4"></div>
      <span className="text-sky-800 text-xl font-semibold">Profile Settings</span>
    </button>
    <button className="w-64 h-16 bg-white border-l border-r border-t border-slate-400 flex items-center justify-start pl-8">
      <div className="w-4 h-4 bg-sky-800 rounded-full mr-4"></div>
      <span className="text-sky-800 text-xl font-semibold">Manage Bookings</span>
    </button>
    <button className="w-64 h-16 bg-white border-1 border-slate-400 flex items-center justify-start pl-8">
      <div className="w-4 h-4 bg-sky-800 rounded-full mr-4"></div>
      <span className="text-sky-800 text-xl font-semibold">Log Out</span>
    </button>
    </div>
  );
};

export default UserNavigate;
