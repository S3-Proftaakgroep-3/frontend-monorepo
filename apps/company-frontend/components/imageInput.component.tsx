import { uuidv4 } from "@firebase/util"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { useState } from "react"
import { storage } from "../firebase"

export const ImageInput = () => {

    const [image, setImage] = useState<File>()
    const [downloadUrl, setDownloadUrl] = useState<string>('')

    // Checks image type
    // Sets image in state
    // THIS FUNCTION IS READY TO BE USED
    const handleChange = async (e: any) => {
        if (e.target.files && e.target.files[0]) {

            // Image file
            const file = e.target.files[0]
            const fileType: string = file.type

            // Allowed file types
            const allowedTypes: string[] = ['image/jpeg', 'image/png', 'image/webp']

            // Check if file type is allowed
            if (allowedTypes.indexOf(fileType) == -1) {
                alert(`Bestand type: ${fileType} is niet toegestaan. Gelieve een afbeelding van de volgende types selecteren: jpeg/jpg, png of webp.`)
            } else {
                setImage(file)
            }
        }
    }

    // Upload image to Cloud Storage 
    // ADD THIS CODE TO SAVE BUTTON
    const handleUpload = async () => {

        if (image) {
            // Create unique image ID
            const id: string = uuidv4()

            // Reference to to-be-created file
            const imgRef = ref(storage, id)

            try {
                // Upload image to firebase storage
                await uploadBytes(imgRef, image)

                // Get download url
                const url: string = await getDownloadURL(imgRef)

                // DON'T SET URL TO A STATE
                // INSTEAD, PUT IT IN REQUEST BODY
                setDownloadUrl(url)

            } catch (e) {

                alert('Toevoegen van afbeelding mislukt.')
            }
        }
    }

    return (
        <div>
            {/* Label & input */}
            <label htmlFor="logo">Logo:</label>
            <input
                type='file'
                id="logo"
                onChange={handleChange}
                accept=".jpeg,.png, .webp"
            />

            {/* Dit keer was het niet Steijn */}
            <br/> <br/> 

            {/* Upload button */}
            <button onClick={handleUpload}>Upload</button>

            {/* Dit keer was het niet Steijn */}
            <br/> <br/> 

            {/* Display download url */}
            {
                downloadUrl &&
                <p>{`Download url: ${downloadUrl}`}</p>
            }
        </div>

    )
}