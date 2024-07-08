import { FC } from 'react'

interface SubscriptionCardProps {
  title: string
  description: string
  price: string
  buttonText: string
}

export const SubscriptionCard: FC<SubscriptionCardProps> = ({
  title,
  description,
  price,
  buttonText,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full">
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
        <p className="text-lg font-semibold mb-4">{price}</p>
      </div>
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white py-2 px-4 rounded">{buttonText}</button>
      </div>
    </div>
  )
}
