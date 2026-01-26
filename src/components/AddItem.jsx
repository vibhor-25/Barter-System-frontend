import React, { useEffect } from 'react'
import '../styles/popup.css'
import '../styles/AddItem.css'
import { X } from 'lucide-react'

import { tintContext } from '../App'

const IMG_PLUS = 'https://www.figma.com/api/mcp/asset/ac66318e-31ce-4683-8197-41cefb7a1b4a'
const IMG_PLUS_MED = 'https://www.figma.com/api/mcp/asset/a6871577-5ef4-455d-943b-69f07ba05d65'
const IMG_PLUS_SM = 'https://www.figma.com/api/mcp/asset/db64acbd-d32c-47b7-aa89-4b555d69fe23'
const IMG_CLOSE = 'https://www.figma.com/api/mcp/asset/2366f906-ecae-4592-a8d9-aae8619de8c7'
const IMG_TAG_X = 'https://www.figma.com/api/mcp/asset/3f7ecf60-d24b-4dba-b114-6d02ee2bbce9'
const IMG_ADD_ICON = 'https://www.figma.com/api/mcp/asset/9a29e584-ba9c-4037-8c73-36d3b61b9e86'

const AddItem = ({ ShowAddItem, setShowAddItem }) => {
    const { bgTint, setBgTint } = React.useContext(tintContext)

    const handleClose = () => {
        setBgTint(false)
        setShowAddItem(false)
    }

    useEffect(() => {
        setBgTint(true)

        const handleDocClick = (e) => {
            const tint = document.getElementById('tint')
            if (ShowAddItem && tint && tint.contains(e.target)) {
                handleClose()
            }
        }

        document.addEventListener('click', handleDocClick)
        return () => document.removeEventListener('click', handleDocClick)
    }, [ShowAddItem])

    if (!ShowAddItem) return null

    return (
        <div className="popup-box additem-root">
            <button className="close-btn" onClick={handleClose} aria-label="Close">
                <X size={20} />
            </button>

            <div className="additem-container">
                <div className="ai-left">
                    <div className="thumbnail">
                        <div className="plus-wrap">
                            <img src={IMG_PLUS} alt="add" />
                        </div>
                        <p className="thumb-text">Add/Change Thumbnail Photo</p>
                    </div>

                    <div className="other-images">
                        <div className="img-box" />
                        <div className="img-box" />
                        <div className="img-box add-small">
                            <img src={IMG_PLUS_MED} alt="add-small" />
                        </div>
                    </div>
                </div>

                <div className="ai-right">
                    <div className="ai-close-icon">
                        <img src={IMG_CLOSE} alt="close icon" />
                    </div>

                    <h2 className="ai-title">Title</h2>
                    <p className="ai-desc">Description</p>

                    <h3 className="ai-subheading">Select Address</h3>

                    <button className="address-btn">
                        <span className="radio" />
                        <span className="label">Gala No 32, 6, Sanjay Mittal Indl Estate, Andheri Kurla Rd, Andheri(e)</span>
                    </button>

                    <button className="address-btn">
                        <span className="radio" />
                        <span className="label">112, Sati Indl Estate, I B Patel Rd, Goregaon( East), Mumbai</span>
                    </button>

                    <div className="used-new">
                        <div className="used-pill active">Used</div>
                        <button className="new-pill">New</button>
                    </div>

                    <div className="tags-section">
                        <h4>Tags:</h4>
                        <div className="tags-row">
                            <div className="tag">
                                <span>Tag</span>
                                <img src={IMG_TAG_X} alt="remove" />
                            </div>
                            <div className="tag">
                                <span>Tag</span>
                                <img src={IMG_TAG_X} alt="remove" />
                            </div>
                            <div className="tag add-tag">
                                <img src={IMG_PLUS_SM} alt="add" />
                            </div>
                        </div>
                    </div>

                    <div className="actions">
                        <button className="add-item-btn">
                            <img src={IMG_ADD_ICON} alt="plus" />
                            <span>Add Item</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem
