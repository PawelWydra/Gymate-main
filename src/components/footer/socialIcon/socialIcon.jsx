function SocialIcon(props) {
  return (
    <div className="bg-gray-200 size-10 rounded-full flex items-center justify-center">
      <i className="text-gray-600 text-xl">{props.icon}</i>
    </div>
  );
}

export default SocialIcon;
