import Aside from '../../assets/aside.svg';

const LoginSideSection = () => {
  return (
    <aside className="h-full bg-primary-blue shadow-aside-left">
      <img src={Aside} className="h-full p-2 opacity-90" />
    </aside>
  );
};

export default LoginSideSection;
