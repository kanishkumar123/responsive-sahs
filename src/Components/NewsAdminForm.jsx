import React, { useState } from "react";
import axios from "axios";

const NewsAdminForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("All fields are required.");
      return;
    }

    try {
      setUploading(true);

      // Upload image to server
      const formData = new FormData();
      formData.append("image", image);

      const imageUploadRes = await axios.post(
        "http://localhost/sahs-news/upload_image.php",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // Expecting only the filename from PHP
      const imageFilename = imageUploadRes.data.filename;

      // Send title, description, and just filename to DB
      await axios.post("http://localhost/sahs-news/insert_news.php", {
        title,
        description,
        image: imageFilename,
      });

      alert("News added successfully!");

      // Reset form
      setTitle("");
      setDescription("");
      setImage(null);
      setUploading(false);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Something went wrong!");
      setUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "auto" }}>
      <h2>Add News Item</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        rows="4"
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        required
        style={{ marginBottom: "10px" }}
      />

      <button type="submit" disabled={uploading}>
        {uploading ? "Uploading..." : "Add News"}
      </button>
    </form>
  );
};

export default NewsAdminForm;
