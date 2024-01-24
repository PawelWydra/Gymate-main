function SocialIcon(props) {
  return (
    <div className="bg-gray-300 w-12 h-12 rounded-full flex items-center justify-center">
      <i className="text-gray-600 text-xl">{props.icon}</i>
    </div>
  );
}

export default SocialIcon;
