import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import User from '../models/User';
import config from '../config/config';
const createAdmin = async () => {
  const adminName = 'Admin'
  const adminEmail = 'nikhil.shrey.2003@gmail.com';
  const adminPassword = 'N1K#1L0212';
  const adminPhone = 9111900797;
  const adminAddress = 'Mumbai, India';

  try {
    await mongoose.connect(config.mongodb.url, {
    });

    const existingAdmin = await User.findOne({ email: adminEmail, role: 'admin' });
    if (existingAdmin) {
      console.log('Admin already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    const newAdmin = new User({
      name: adminName,
      email: adminEmail,
      password: hashedPassword,
      phone: adminPhone,
      address: adminAddress,
      role: 'admin',
    });

    await newAdmin.save();
    console.log('Admin created successfully');
  } catch (err) {
    console.error('Error creating admin:', err);
  } finally {
    mongoose.connection.close();
  }
};

createAdmin();
