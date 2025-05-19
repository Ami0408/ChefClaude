import Chef from '../assets/chef.png'
export default function Header() {
  return (
    <header className="header">
      <img src = {Chef} alt='chef hu' className ='chef-logo' />
      <h2>Chef Claude</h2>
    </header>
  );
}
