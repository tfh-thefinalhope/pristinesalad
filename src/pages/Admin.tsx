import { useEffect, useState } from "react";
import { FolderPen, Save, LogOut } from "lucide-react";
import defaultContent from "@/data/content.json";

export default function AdminPage() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState("hero");

    useEffect(() => {
        // Load from LocalStorage if available, else use default content
        const savedData = localStorage.getItem("siteContent");
        if (savedData) {
            try {
                setData(JSON.parse(savedData));
            } catch (e) {
                console.error("Failed to parse saved content, reverting to default", e);
                setData(defaultContent);
            }
        } else {
            setData(defaultContent);
        }
        setLoading(false);
    }, []);

    const handleSave = async () => {
        setSaving(true);
        // Simulate network delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));

        try {
            localStorage.setItem("siteContent", JSON.stringify(data));
            alert("Content Saved to Browser Storage Successfully!");
        } catch (e) {
            console.error(e);
            alert("Error saving.");
        }
        setSaving(false);
    };

    const updateField = (path: string[], value: any) => {
        // Deep update helper
        const newData = { ...data };
        let current = newData;
        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
        }
        current[path[path.length - 1]] = value;
        setData(newData);
    };

    if (loading) return <div className="p-10">Loading CMS...</div>;

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-dark text-white p-6 flex flex-col">
                <div className="flex items-center space-x-2 mb-10">
                    <FolderPen className="w-6 h-6 text-brand-green" />
                    <span className="font-bold text-xl">CMS Admin</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {["hero", "story", "menu", "offer"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-colors ${activeTab === tab ? "bg-brand-green text-white" : "hover:bg-white/10 text-gray-300"
                                }`}
                        >
                            {tab} Section
                        </button>
                    ))}
                </nav>

                <a href="/" className="flex items-center space-x-2 text-gray-400 hover:text-white mt-auto">
                    <LogOut className="w-5 h-5" />
                    <span>Back to Site</span>
                </a>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-auto">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold capitalize text-gray-800">{activeTab} Manager</h1>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center space-x-2 bg-brand-green text-white px-6 py-3 rounded-xl hover:bg-brand-darkGreen transition-colors disabled:opacity-50"
                    >
                        <Save className="w-5 h-5" />
                        <span>{saving ? "Saving..." : "Save Changes"}</span>
                    </button>
                </div>

                <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6">

                    {/* Dynamic Form Generation based on structure */}
                    {activeTab === "hero" && (
                        <>
                            <div className="form-group">
                                <label>Title</label>
                                <input
                                    type="text"
                                    value={data.hero.title}
                                    onChange={(e) => updateField(["hero", "title"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="form-group">
                                <label>Subtitle</label>
                                <input
                                    type="text"
                                    value={data.hero.subtitle}
                                    onChange={(e) => updateField(["hero", "subtitle"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    value={data.hero.description}
                                    onChange={(e) => updateField(["hero", "description"], e.target.value)}
                                    className="w-full p-3 border rounded-lg h-32"
                                />
                            </div>
                        </>
                    )}

                    {activeTab === "story" && (
                        <>
                            <div className="form-group">
                                <label>Story Title</label>
                                <input
                                    type="text"
                                    value={data.story.title}
                                    onChange={(e) => updateField(["story", "title"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="form-group">
                                <label>Content Paragraphs</label>
                                {data.story.content.map((p: string, i: number) => (
                                    <textarea
                                        key={i}
                                        value={p}
                                        onChange={(e) => {
                                            const newContent = [...data.story.content];
                                            newContent[i] = e.target.value;
                                            updateField(["story", "content"], newContent);
                                        }}
                                        className="w-full p-3 border rounded-lg mb-2 h-24"
                                    />
                                ))}
                            </div>
                        </>
                    )}

                    {activeTab === "menu" && (
                        <>
                            <div className="form-group">
                                <label>Section Title</label>
                                <input
                                    type="text"
                                    value={data.menu.title}
                                    onChange={(e) => updateField(["menu", "title"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <h3 className="font-bold mt-6 mb-4">Menu Items</h3>
                            {data.menu.items.map((item: any, i: number) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-xl mb-4 border border-gray-100">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-sm text-gray-400">Item Name</label>
                                            <input
                                                type="text"
                                                value={item.name}
                                                onChange={(e) => {
                                                    const newItems = [...data.menu.items];
                                                    newItems[i].name = e.target.value;
                                                    updateField(["menu", "items"], newItems);
                                                }}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-gray-400">Description</label>
                                            <input
                                                type="text"
                                                value={item.description}
                                                onChange={(e) => {
                                                    const newItems = [...data.menu.items];
                                                    newItems[i].description = e.target.value;
                                                    updateField(["menu", "items"], newItems);
                                                }}
                                                className="w-full p-2 border rounded"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <label className="text-sm text-gray-400">Image URL</label>
                                        <input
                                            type="text"
                                            value={item.image || ""}
                                            onChange={(e) => {
                                                const newItems = [...data.menu.items];
                                                newItems[i].image = e.target.value;
                                                updateField(["menu", "items"], newItems);
                                            }}
                                            className="w-full p-2 border rounded font-mono text-xs"
                                        />
                                    </div>
                                </div>
                            ))}
                        </>
                    )}

                    {activeTab === "offer" && (
                        <>
                            <div className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    checked={data.offer.show}
                                    onChange={(e) => updateField(["offer", "show"], e.target.checked)}
                                    className="w-5 h-5 text-brand-green"
                                />
                                <label className="font-bold">Show Popup?</label>
                            </div>
                            <div className="form-group">
                                <label>Offer Title</label>
                                <input
                                    type="text"
                                    value={data.offer.title}
                                    onChange={(e) => updateField(["offer", "title"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <input
                                    type="text"
                                    value={data.offer.description}
                                    onChange={(e) => updateField(["offer", "description"], e.target.value)}
                                    className="w-full p-3 border rounded-lg"
                                />
                            </div>
                            <div className="form-group">
                                <label>Coupon Code</label>
                                <input
                                    type="text"
                                    value={data.offer.code}
                                    onChange={(e) => updateField(["offer", "code"], e.target.value)}
                                    className="w-full p-3 border rounded-lg font-mono"
                                />
                            </div>
                        </>
                    )}

                </div>
            </main >
        </div >
    );
}
