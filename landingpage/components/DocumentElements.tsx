export const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </div>
);

export const TableRow = ({
  purpose,
  provider,
}: {
  purpose: string;
  provider: string;
}) => (
  <tr className="border-t hover:bg-gray-50">
    <td className="p-3">{purpose}</td>
    <td className="p-3">{provider}</td>
  </tr>
);
