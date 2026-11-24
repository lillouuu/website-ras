export type Domain = {
  tag: string;
  title: string;
  desc: string;
  stack: string;
};

export const domains: Record<string, Domain> = {
  "mobile-robotics": {
    tag: "DOMAIN // MOBILE ROBOTICS",
    title: "Autonomous Mobile Robotics",
    desc: "Designing differential-drive and omnidirectional mobile bases equipped with 2D LiDAR, wheel encoders, and IMU sensor fusion for SLAM mapping and autonomous navigation.",
    stack: "ROS2 · C++ · Python · Gazebo · Nav2",
  },
  embedded: {
    tag: "DOMAIN // EMBEDDED & PCB",
    title: "Embedded Systems & PCB Design",
    desc: "Developing real-time firmware on STM32 and NXP microcontrollers, custom H-bridge motor drivers, and compact multi-layer PCBs for competition robots.",
    stack: "STM32 · NXP · KiCad · FreeRTOS · C/C++",
  },
  vision: {
    tag: "DOMAIN // COMPUTER VISION & AI",
    title: "Computer Vision & Edge AI",
    desc: "Implementing real-time lane detection, object recognition, and camera-LiDAR sensor fusion on embedded edge compute platforms.",
    stack: "OpenCV · PyTorch · ONNX · Jetson · Python",
  },
  mechanical: {
    tag: "DOMAIN // MECHANICAL & CONTROL",
    title: "Mechanical Design & Control Systems",
    desc: "CAD modeling of competition chassis and precision actuators, paired with PID/LQR state estimation and closed-loop motion control.",
    stack: "SolidWorks · 3D Printing · MATLAB · PID Control",
  },
};
