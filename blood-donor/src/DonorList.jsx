import DonorCard from "./DonorCard"

export default function DonorList({
  donors,
  requestedIds,
  handleRequest
}) {
  return (
    <div className="donor-grid">
      {donors.map(donor => (
        <DonorCard
          key={donor.id}
          donor={donor}
          requestedIds={requestedIds}
          handleRequest={handleRequest}
        />
      ))}
    </div>
  )
}