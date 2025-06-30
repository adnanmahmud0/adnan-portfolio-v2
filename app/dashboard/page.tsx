'use client';

import { useState } from 'react';

interface ProjectFormData {
  title: string;
  description: string;
  techStack: string;
  repoLink: string;
  liveLink: string;
  features: string;
  imageFile: File | null;
}

export default function AddProjectPage() {
  const [formData, setFormData] = useState<ProjectFormData>({
    title: '',
    description: '',
    techStack: '',
    repoLink: '',
    liveLink: '',
    features: '',
    imageFile: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const imgbbApiKey = 'b79f8a5aa850744c137caea7e617d801'; // 🔑 Replace this

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'imageFile') {
      setFormData({ ...formData, imageFile: files ? files[0] : null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess('');
    setError('');

    try {
      if (!formData.imageFile) {
        throw new Error('Image file is required');
      }

      // Upload image to imgbb
      const imageData = new FormData();
      imageData.append('image', formData.imageFile);

      const uploadRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgbbApiKey}`,
        {
          method: 'POST',
          body: imageData,
        }
      );

      const uploadJson = await uploadRes.json();
      const imageUrl = uploadJson.data.url;

      // Prepare and submit project data
      const projectPayload = {
        title: formData.title,
        description: formData.description,
        techStack: formData.techStack
          .split(',')
          .map((s) => s.trim())
          .filter((s) => s),
        repoLink: formData.repoLink,
        liveLink: formData.liveLink,
        features: formData.features
          .split(',')
          .map((f) => f.trim())
          .filter((f) => f),
        imageUrl,
      };

      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectPayload),
      });

      if (!res.ok) throw new Error('Failed to submit project');

      setSuccess('✅ Project added successfully!');
      setFormData({
        title: '',
        description: '',
        techStack: '',
        repoLink: '',
        liveLink: '',
        features: '',
        imageFile: null,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Error:', err.message);
        setError(err.message);
      } else {
        setError('❌ Unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <h1 className="text-2xl font-bold mb-6">Add New Project</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Project Title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="techStack"
          placeholder="Tech Stack (comma separated)"
          value={formData.techStack}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="url"
          name="repoLink"
          placeholder="GitHub Repo URL"
          value={formData.repoLink}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="url"
          name="liveLink"
          placeholder="Live Site URL"
          value={formData.liveLink}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          name="features"
          placeholder="Features (comma separated)"
          value={formData.features}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <input
          type="file"
          name="imageFile"
          accept="image/*"
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Submitting...' : 'Add Project'}
        </button>

        {success && <p className="text-green-600">{success}</p>}
        {error && <p className="text-red-600">{error}</p>}
      </form>
    </div>
  );
}
