type GitGridItemProps = {
  title: string;
  url: string;
};

function GitGridItem({ title, url }: GitGridItemProps) {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
        <p>{title}</p>
      </div>
    </>
  );
}

export default GitGridItem;
