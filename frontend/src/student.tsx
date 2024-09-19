type studentProps = {
  id: string;
  name: string;
}

export default function Student(props: studentProps) {
  const { id, name } = props;
  return (
    <div>
      <p id="class-student">{name}</p>
    </div>
  );
}