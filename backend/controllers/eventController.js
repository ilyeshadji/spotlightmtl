const GetAllEventsJob = require("../jobs/Events/GetAllEventsJob");
const CreateEventJob = require("../jobs/Events/CreateEventJob");
const getEvents = async (req, res, next) => {
  const events = await GetAllEventsJob(req, res, next);

  if (!events) {
    return;
  }

  res.status(200).json(events);
};

const createEvent = async (req, res, next) => {
  const event = await CreateEventJob(req, res, next);

  if (!event) {
    return;
  }

  res.status(200).json("Successfully created event");
};

exports.getEvents = getEvents;
exports.createEvent = createEvent;