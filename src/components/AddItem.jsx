import React, { useEffect } from 'react'
import '../styles/popup.css'
import '../styles/AddItem.css'
import { X } from 'lucide-react'

import { tintContext } from '../App'

const IMG_PLUS = '../../public/images/IMG_PLUS.svg'
const IMG_PLUS_MED = '../../public/images/IMG_PLUS_MED.svg'
const IMG_PLUS_SM = '../../public/images/IMG_PLUS_SM.svg'
const IMG_TAG_X = '../../public/images/IMG_TAG_X.svg'
const IMG_ADD_ICON = '../../public/images/IMG_ADD_ICON.svg'

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
                    <div className="thumbnail ">
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
                            <span>Save</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddItem
