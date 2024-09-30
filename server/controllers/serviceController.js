import { Service } from "../models/serviceModel.js";

// get all services
export const getServices = async (req, res, next) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    next(error);
  }
};

// add a new service
export const addService = async (req, res, next) => {
  try {
    const { name, description, price } = req.body;

    const newService = new Service({ name, description, price });
    await newService.save();

    res
      .status(201)
      .json({ message: "Service added successfully", service: newService });
  } catch (error) {
    next(error);
  }
};

// delete a service by ID
export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const service = await Service.findByIdAndDelete(id);

    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({ message: "Service deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// update a service by ID
export const updateService = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, price } = req.body;

    const updatedService = await Service.findByIdAndUpdate(
      id,
      { name, description, price },
      { new: true, runValidators: true }
    );

    if (!updatedService) {
      return res.status(404).json({ message: "Service not found" });
    }

    res.status(200).json({
      message: "Service updated successfully",
      service: updatedService,
    });
  } catch (error) {
    next(error);
  }
};
