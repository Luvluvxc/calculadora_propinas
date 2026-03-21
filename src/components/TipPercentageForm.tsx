const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

export default function TipPercentageForm() {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg shadow-md">
      <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
        Propina
      </h3>
      
      <form className="flex gap-4 justify-center flex-wrap">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex items-center">
            <input
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              className="hidden peer"
            />
            <label
              htmlFor={tip.id}
              className="px-4 py-2 bg-white border-2 border-gray-200 rounded-lg cursor-pointer font-medium transition-all duration-200 peer-checked:bg-blue-500 peer-checked:border-blue-500 peer-checked:text-white hover:bg-blue-500 hover:border-blue-500 hover:text-white"
            >
              {tip.label}
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}