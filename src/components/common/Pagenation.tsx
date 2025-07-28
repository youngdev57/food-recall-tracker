type PagenationProps = {
  current: number;
  total: number;
  perPage: number;
  onPageChange: (page: number) => void;
};

export default function Pagenation({
  current,
  total,
  perPage,
  onPageChange,
}: PagenationProps) {
  const totalPages = Math.ceil(total / perPage);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center gap-1 mt-4">
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
        className="px-3 py-1 border rounded disabled:opacity-30"
      >
        이전
      </button>

      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => onPageChange(num)}
          className={`px-3 py-1 border rounded ${
            current === num ? "bg-blue-500 text-white" : ""
          }`}
        >
          {num}
        </button>
      ))}

      <button
        onClick={() => onPageChange(current + 1)}
        disabled={current === totalPages}
        className="px-3 py-1 border rounded disabled:opacity-30"
      >
        다음
      </button>
    </div>
  );
}
