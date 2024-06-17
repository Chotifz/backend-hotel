const userDetailService = require("../services/userDetailService");

const getUserDetails = async (req, res) => {
  try {
    const userDetails = await userDetailService.getAllUserDetails();
    res.json(userDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserDetailById = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetail = await userDetailService.getUserDetail(id);
    res.json(userDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUserDetail = async (req, res) => {
  try {
    const userDetailData = req.body;
    const newUserDetail = await userDetailService.addUserDetail(userDetailData);
    res.json(newUserDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUserDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const userDetailData = req.body;
    const updatedUserDetail = await userDetailService.editUserDetail(
      id,
      userDetailData
    );
    res.json(updatedUserDetail);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUserDetail = async (req, res) => {
  try {
    const { id } = req.params;
    await userDetailService.removeUserDetail(id);
    res.json({ message: "User detail deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUserDetails,
  getUserDetailById,
  createUserDetail,
  updateUserDetail,
  deleteUserDetail,
};
