import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
//internal import
import useToggleDrawer from "hooks/useToggleDrawer";
import AttributeDrawer from "components/drawer/AttributeDrawer";
import MainDrawer from "components/drawer/MainDrawer";
import CheckBox from "components/form/CheckBox";
import ShowHideButton from "components/table/ShowHideButton";
import Tooltip from "components/tooltip/Tooltip";
import EditDeleteButton from "components/table/EditDeleteButton";
import DeleteModal from "components/modal/DeleteModal";
import AttributeServices from "services/AttributeServices";
import { showingTranslateValue } from "utils/translate";
// import { showingTranslateValue } from "utils/translate";

const AttributeTable = ({ isCheck, setIsCheck, attributes }) => {
  const { title, serviceId, handleModalOpen, handleUpdate, lang } = useToggleDrawer();

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    if (!checked) {
      setIsCheck(isCheck.filter((item) => item !== id));
    }
  };
  // const deleteAttribute = async (id) => {
  //   try {
  //     // Call deleteAttribute function from AttributeServices module
  //     await AttributeServices.deleteAttribute(id);
  //     // Optional: Add any UI updates or notifications for successful deletion
  //     console.log("Attribute deleted successfully!");
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error deleting attribute:", error);
  //     // Optional: Add error handling UI updates or notifications
  //   }
  // };
  // const [data, setData] = useState([
  //   {
  //     _id: '3923fsd',
  //     title: 'Attribute 1',
  //     name: 'Attribute',
  //     option: 'option 1'
  //   },
  //   {
  //     _id: '39ingtr',
  //     title: 'Attribute 2',
  //     name: 'Attribute',
  //     option: 'option 2'
  //   },
  //   {
  //     _id: '3345dkll',
  //     title: 'Attribute 3',
  //     name: 'Attribute',
  //     option: 'option 3'
  //   },
  //   {
  //     _id: '32fdjk',
  //     title: 'Attribute 4',
  //     name: 'Attribute',
  //     option: 'option 4'
  //   }
  // ]);
  // Function to handle deletion of selected attributes
  // const handleDeleteSelectedAttributes = () => {
  //   try {
  //     // Filter out the attributes that are not selected
  //     const updatedData = data.filter((attribute) => !isCheck.includes(attribute._id));
  //     // Update the data with the filtered attributes
  //     setData(updatedData);
  //     // Clear the selection
  //     setIsCheck([]);
  //     // Show a success message or trigger any necessary UI updates
  //     console.log("Selected attributes deleted successfully");
  //   } catch (error) {
  //     // Handle errors
  //     console.error("Error deleting selected attributes:", error);
  //     // Show an error message or trigger any necessary UI updates
  //   }
  // };
  // console.log('attributes', attributes);

  return (
    <>
      {isCheck.length < 1 && <DeleteModal id={serviceId} title={title} />}

      {isCheck.length < 2 && (
        //Added By: Govinda 25/3/2024
        <MainDrawer>
          <AttributeDrawer id={serviceId} />
        </MainDrawer>
      )}

      <TableBody>
        {attributes?.map((attribute) => (
          <TableRow key={attribute._id}>
            <TableCell>
              <CheckBox
                type="checkbox"
                name="attribute"
                id={attribute._id}
                handleClick={handleClick}
                isChecked={isCheck?.includes(attribute._id)}
              />
            </TableCell>

            <TableCell className="font-semibold uppercase text-xs">
              {attribute?._id?.substring(0, 6)}
            </TableCell>

            <TableCell className="font-medium text-sm">
              {/* {showingTranslateValue(attribute.title, lang)} */}
              {attribute.title}
            </TableCell>

            <TableCell className="font-medium text-sm">
              {/* {showingTranslateValue(attribute.name, lang)} */}
              {attribute.name}
            </TableCell>

            {/* <TableCell className="font-medium text-sm">
              {attribute.variants}
            </TableCell> */}

            <TableCell className="font-medium text-sm">
              {attribute.option}
            </TableCell>

            {/* <TableCell className="text-center">
              <ShowHideButton id={attribute._id} status={attribute.status} />
            </TableCell> */}

            <TableCell className="flex justify-center">
              <Link
                to={`/attributes/${attribute._id}`}
                className="p-2 cursor-pointer text-gray-400 hover:text-green-600 focus:outline-none"
              >
                <Tooltip
                  id="edit values"
                  Icon={FiEdit}
                  title="Edit Values"
                  bgColor="#10B981"
                />
              </Link>
            </TableCell>

            <TableCell>
              <EditDeleteButton
                id={attribute._id}
                isCheck={isCheck}
                setIsCheck={setIsCheck}
                handleUpdate={handleUpdate}
                handleModalOpen={handleModalOpen}
                title={attribute.title}
              // onClick={() => deleteAttribute(attribute._id)} // Call deleteAttribute function with attribute id
              // title={showingTranslateValue(attribute.title, lang)}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </>
  );
};

export default AttributeTable;
