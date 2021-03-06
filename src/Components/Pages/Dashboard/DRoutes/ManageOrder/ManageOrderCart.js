import React from 'react';
import useAuth from '../../../../../Hooks/useAuth';

const ManageOrderCart = ({ order, updateStatus, deletStatus }) => {
    const { user } = useAuth()

    const { _id, Name, Email, Model, Price, Status } = order;
    return (
        <>
            <tr key="{person.email}">
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={user.photoUrl} alt="" />
                        </div>
                        <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{Name}</div>
                            <div className="text-sm text-gray-500">{Email}</div>
                        </div>
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{Model}</div>
                    <div className="text-sm text-gray-500">{Price}/-</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {Status}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">admin</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => updateStatus(_id)} className='border bg-green-400 hover:bg-green-500 rounded-lg py-1 px-1'>Make Shipped</button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button onClick={() => deletStatus(_id)} className='border bg-red-400 hover:bg-red-500 rounded-lg py-1 px-1'>Delete</button>
                </td>
            </tr>
        </>
    );
};

export default ManageOrderCart;