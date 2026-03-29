import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { getProjects, getExperiences, addProject, addExperience, updateProject, updateExperience, deleteProject, deleteExperience, type Project, type Experience } from '../lib/data';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  const [activeTab, setActiveTab] = useState<'projects' | 'experiences'>('projects');

  const [projects, setProjects] = useState<Project[]>([]);
  const [experiences, setExperiences] = useState<Experience[]>([]);

  // Form states
  const [editingItem, setEditingItem] = useState<any>(null);
  const [isNewItem, setIsNewItem] = useState(false);

  const fetchAll = async () => {
    const p = await getProjects();
    const e = await getExperiences();
    setProjects(p);
    setExperiences(e);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAll();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo purposes, checking a simple password.
    // In production, use real authentication (e.g., Supabase Auth).
    if (password === 'admin' || password === 'devchetal') {
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeTab === 'projects') {
      if (!isNewItem && editingItem.id) {
        await updateProject(editingItem.id, editingItem);
      } else {
        await addProject({ ...editingItem, id: editingItem.id || Date.now().toString() });
      }
    } else {
      if (!isNewItem && editingItem.id) {
        await updateExperience(editingItem.id, editingItem);
      } else {
        await addExperience({ ...editingItem, id: editingItem.id || Date.now().toString() });
      }
    }
    setEditingItem(null);
    setIsNewItem(false);
    fetchAll();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure?')) {
      if (activeTab === 'projects') {
        await deleteProject(id);
      } else {
        await deleteExperience(id);
      }
      fetchAll();
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-24 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
          <input
            type="password"
            placeholder="Password (admin)"
            className="p-3 rounded-xl bg-card border border-border text-foreground"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="p-3 bg-apple-blue text-white rounded-xl font-medium">Login</button>
        </form>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button onClick={() => setIsAuthenticated(false)} className="text-sm text-muted-foreground hover:text-foreground">Logout</button>
        </div>

        <div className="flex gap-4 mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => { setActiveTab('projects'); setEditingItem(null); setIsNewItem(false); }}
              className={`px-4 py-2 rounded-full ${activeTab === 'projects' ? 'bg-apple-blue text-white' : 'bg-card text-muted-foreground'}`}
            >
              Projects
            </button>
            <button
              onClick={() => { setActiveTab('experiences'); setEditingItem(null); setIsNewItem(false); }}
              className={`px-4 py-2 rounded-full ${activeTab === 'experiences' ? 'bg-apple-blue text-white' : 'bg-card text-muted-foreground'}`}
            >
              Experiences
            </button>
          </div>

          <button
            onClick={() => {
              const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({ projects, experiences }, null, 2));
              const downloadAnchorNode = document.createElement('a');
              downloadAnchorNode.setAttribute("href",     dataStr);
              downloadAnchorNode.setAttribute("download", "portfolio_data_export.json");
              document.body.appendChild(downloadAnchorNode);
              downloadAnchorNode.click();
              downloadAnchorNode.remove();
            }}
            className="px-4 py-2 text-sm bg-secondary text-foreground rounded-xl border border-border hover:bg-secondary/80 transition-colors"
            title="Export your modified localStorage data so you can update src/lib/data.ts"
          >
            ⬇ Export Data to JSON
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1 border-r border-border pr-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold capitalize">{activeTab}</h2>
              <button
                onClick={() => { setEditingItem({}); setIsNewItem(true); }}
                className="text-sm text-apple-blue hover:underline"
              >
                + Add New
              </button>
            </div>
            <div className="space-y-2">
              {(activeTab === 'projects' ? projects : experiences).map((item: any) => (
                <div key={item.id} className="p-3 bg-card border border-border rounded-xl flex justify-between items-center">
                  <span className="truncate">{item.title || item.role}</span>
                  <div className="flex gap-2">
                    <button onClick={() => { setEditingItem(item); setIsNewItem(false); }} className="text-xs text-muted-foreground hover:text-apple-blue">Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="text-xs text-muted-foreground hover:text-red-500">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            {editingItem ? (
              <form onSubmit={handleSave} className="bg-card border border-border p-6 rounded-2xl flex flex-col gap-4">
                <h2 className="text-2xl font-semibold mb-2">{editingItem.id ? 'Edit' : 'Add'} {activeTab === 'projects' ? 'Project' : 'Experience'}</h2>

                {/* ID input for new items, readonly for existing */}
                <div>
                  <label className="block text-sm text-muted-foreground mb-1">ID (Slug for URL)</label>
                  <input
                    type="text"
                    value={editingItem.id || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, id: e.target.value })}
                    className="w-full p-2 rounded-lg bg-background border border-border disabled:opacity-50"
                    required
                    disabled={!isNewItem}
                  />
                </div>

                {activeTab === 'projects' ? (
                  <>
                    <input type="text" placeholder="Title" value={editingItem.title || ''} onChange={e => setEditingItem({...editingItem, title: e.target.value})} className="p-2 rounded-lg bg-background border border-border" required />
                    <input type="text" placeholder="Tagline" value={editingItem.tagline || ''} onChange={e => setEditingItem({...editingItem, tagline: e.target.value})} className="p-2 rounded-lg bg-background border border-border" />
                    <textarea placeholder="Description" value={editingItem.description || ''} onChange={e => setEditingItem({...editingItem, description: e.target.value})} className="p-2 rounded-lg bg-background border border-border h-24" />
                    <textarea placeholder="Long Description" value={editingItem.longDescription || ''} onChange={e => setEditingItem({...editingItem, longDescription: e.target.value})} className="p-2 rounded-lg bg-background border border-border h-32" />
                    <input type="text" placeholder="Image URL" value={editingItem.image || ''} onChange={e => setEditingItem({...editingItem, image: e.target.value})} className="p-2 rounded-lg bg-background border border-border" />
                    <input type="text" placeholder="Category" value={editingItem.category || ''} onChange={e => setEditingItem({...editingItem, category: e.target.value})} className="p-2 rounded-lg bg-background border border-border" />
                    <input type="text" placeholder="Tech (comma separated)" value={editingItem.tech?.join(', ') || ''} onChange={e => setEditingItem({...editingItem, tech: e.target.value.split(',').map((t: string) => t.trim())})} className="p-2 rounded-lg bg-background border border-border" />
                  </>
                ) : (
                  <>
                    <input type="text" placeholder="Role" value={editingItem.role || ''} onChange={e => setEditingItem({...editingItem, role: e.target.value})} className="p-2 rounded-lg bg-background border border-border" required />
                    <input type="text" placeholder="Company" value={editingItem.company || ''} onChange={e => setEditingItem({...editingItem, company: e.target.value})} className="p-2 rounded-lg bg-background border border-border" required />
                    <input type="text" placeholder="Period" value={editingItem.period || ''} onChange={e => setEditingItem({...editingItem, period: e.target.value})} className="p-2 rounded-lg bg-background border border-border" />
                    <input type="text" placeholder="Location" value={editingItem.location || ''} onChange={e => setEditingItem({...editingItem, location: e.target.value})} className="p-2 rounded-lg bg-background border border-border" />
                    <textarea placeholder="Description" value={editingItem.description || ''} onChange={e => setEditingItem({...editingItem, description: e.target.value})} className="p-2 rounded-lg bg-background border border-border h-24" />
                    <textarea placeholder="Long Description" value={editingItem.longDescription || ''} onChange={e => setEditingItem({...editingItem, longDescription: e.target.value})} className="p-2 rounded-lg bg-background border border-border h-32" />
                  </>
                )}

                <div className="flex justify-end gap-2 mt-4">
                  <button type="button" onClick={() => { setEditingItem(null); setIsNewItem(false); }} className="px-4 py-2 rounded-xl border border-border">Cancel</button>
                  <button type="submit" className="px-4 py-2 rounded-xl bg-apple-blue text-white">Save</button>
                </div>
              </form>
            ) : (
              <div className="h-full flex items-center justify-center text-muted-foreground bg-card/50 border border-border border-dashed rounded-2xl">
                Select an item to edit or create a new one.
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
