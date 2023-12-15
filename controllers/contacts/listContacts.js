const { Contact } = require("../../models");

const listContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const config = {
    owner,
  };

  if (favorite) {
    config.favorite = favorite;
  }

  const result = await Contact.find(config, "-createdAt -updatedAt", {
    skip,
    limit,
  }).populate("owner", "name email");

  const totalResults = await Contact.countDocuments(config);

  res.json({
    contacts: result,
    page: parseInt(page),
    perPage: parseInt(limit),
    totalResults: totalResults,
  });
};

module.exports = listContacts;
