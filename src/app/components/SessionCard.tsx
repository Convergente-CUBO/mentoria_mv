interface SessionCardProps {
    date: string;
    title: string;
    mentor: string;
    status: string;
    badges: string[];
  }
  
  export default function SessionCard({ date, title, mentor, status, badges }: SessionCardProps) {
    return (
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-sm text-gray-600">{date}</p>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-800">Com: {mentor}</p>
        <p className="text-sm text-blue-600">{status}</p>
        <div className="flex space-x-2 mt-2">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded-md"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    );
  }
  