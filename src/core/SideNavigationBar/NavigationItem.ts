export default interface NavigationItem {
  icon: string;
  label: string;
  command: () => void;
}
