import React from 'react'

export default function DemoFunctionComponent() {
    return ( //Nội dung thẻ chứa trong lệnh return, lưu ý: Nội dung phải được bao bọc bởi 1 thẻ
        <div>
            <div class="container bg-dark text-white">
                <div className="display-4 p-5">
                    Component
                </div>
                <div className=" p-2 pl-5">
                    Noi dung
                </div>

            </div>

        </div>
    )
}
