interface Props {
  threadId: string;
  currentUserImg: string;
  currentUserId: string;
}

export default function Comment({
  threadId,
  currentUserImg,
  currentUserId,
}: Props) {
  return (
    <div>
      <h1 className="text-white">Comment form</h1>
    </div>
  );
}
