const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex items-center justify-center h-full bg-gradient-to-r from-purple-950 via-red-700 to-pink-950 overflow-auto">
      {children}
    </div>
  );
};

export default AuthLayout;
