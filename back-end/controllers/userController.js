const User = require("../models/User");
const Utils = require("../common/utils");

const checkPermission = (req, res, next) => {
  if (req.session.role === "admin") {
    next();
  } else {
    return res.json(
      Utils.createResponseModel(400, `Bạn không có quyền truy cập`)
    );
  }
};
const handleLogin = async (req, res) => {
  const { phone, password } = req.body;
  const user = await User.findOne({ phone: phone, isDeleted: false });
  //check user exist
  if (!user) {
    return res.json(
      Utils.createResponseModel(
        400,
        `Người dùng không tồn tại tài khoản với số điện thoại ${phone}.`
      )
    );
  }
  //check password
  const isPasswordCorrect = await Utils.validatePassword(
    password,
    user.password
  );
  if (!isPasswordCorrect) {
    return res.json(
      Utils.createResponseModel(400, `Mật khẩu không đúng, vui lòng thử lại`)
    );
  }
  // create session
  req.session.user = user._id;
  req.session.userName = user.userName;
  req.session.role = user.role;
  //create cookie
  res.cookie("user", user._id);
  return res.json(
    Utils.createSuccessResponseModel(1, { Id: user._id, Role: user.role })
  );
};

const handleRegister = async (req, res) => {
  const { phone, password } = req.body;
  const existUser = await User.findOne({ phone: phone, isDeleted: false });
  //check user exist
  if (existUser != null) {
    return res.json(
      Utils.createResponseModel(
        400,
        `Người dùng đã tồn tại tài khoản với số điện thoại ${phone}.`
      )
    );
  }

  try {
    const hashPassword = Utils.hashPassword(password);
    // Tạo một user mới
    const user = await User.create({
      phone: phone,
      password: hashPassword,
    });
    return res.json(Utils.createSuccessResponseModel(1, user._id));
  } catch (error) {
    console.log("userController-Line 31: " + error.message);
    return res.json(
      Utils.createErrorResponseModel("Vui lòng thử lại", error.message)
    );
  }
};

const updateInfoUser = async (req, res) => {
  const { email, name, birthday, address } = req.body;
  const user = await User.findById(req.session.user);
  if (!user) {
    return res.json(
      Utils.createResponseModel(
        400,
        `Vui lòng đăng nhập để cập nhật thông tin cá nhân.`
      )
    );
  }
  user.email = email;
  user.name = name;
  user.birthday = new Date(birthday);
  user.address = address;
  user.updated_at = new Date();
  await user.save();
  const userWithoutPassword = { ...user.toObject() };
  delete userWithoutPassword.password;
  return res.json(Utils.createSuccessResponseModel(1, userWithoutPassword));
};

const getInfoMine = async (req, res) => {
  const user = await User.findById(req.session.user);
  if (!user) {
    return res.json(
      Utils.createResponseModel(
        400,
        `Vui lòng đăng nhập để lấy thông tin cá nhân.`
      )
    );
  }
  const userWithoutPassword = { ...user.toObject() };
  delete userWithoutPassword.password;
  return res.json(Utils.createSuccessResponseModel(1, userWithoutPassword));
};

const changePassword = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (oldPassword === newPassword) {
    return res.json(
      Utils.createErrorResponseModel(
        `Mật khẩu mới không được trùng với mật khẩu cũ.`
      )
    );
  }
  const user = await User.findById(req.session.user);
  if (!user) {
    return res.json(
      Utils.createResponseModel(400, `Vui lòng đăng nhập để đổi mật khẩu.`)
    );
  }
  const isPasswordCorrect = await Utils.validatePassword(
    oldPassword,
    user.password
  );
  if (!isPasswordCorrect) {
    return res.json(
      Utils.createResponseModel(400, `Mật khẩu cũ không đúng, vui lòng thử lại`)
    );
  }
  const hashPassword = Utils.hashPassword(newPassword);
  user.password = hashPassword;
  user.updated_at = new Date();
  await user.save();
  return res.json(Utils.createSuccessResponseModel(1, user._id));
};

//get all user , role != admin, isDeleted = false
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({ role: { $ne: "admin" }, isDeleted: false });
    return res.json(Utils.createSuccessResponseModel(users.length, users));
  } catch (error) {
    console.log(error);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.json(
        Utils.createErrorResponseModel("Người dùng không tồn tại")
      );
    }
    user.isDeleted = true;
    await user.save();
    return res.json(Utils.createSuccessResponseModel(0, true));
  } catch (error) {
    console.log(error);
    return res.json(Utils.createErrorResponseModel("Vui lòng thử lại"));
  }
};

module.exports = {
  handleLogin: handleLogin,
  handleRegister: handleRegister,
  updateInfoUser: updateInfoUser,
  getInfoMine: getInfoMine,
  changePassword: changePassword,
  getAllUsers: getAllUsers,
  deleteUser: deleteUser,
  checkPermission: checkPermission,
};