import { __ } from '@wordpress/i18n';
import {
    useBlockProps,
    InspectorControls,
    InnerBlocks
} from '@wordpress/block-editor';
import {
    withNotices,
    PanelBody,
    RangeControl
} from '@wordpress/components';

import './editor.scss';

function Edit({ attributes, setAttributes }) {
    const { columns } = attributes;
    const onChangeColumns = (newColumns) => {
        setAttributes({ columns: newColumns });
    };
    // End of column settings



    return (
        <>
            <InspectorControls>
                <PanelBody>
                    <RangeControl
                        label="Row Span"
                        min={1}
                        max={4}
                        defaultValue={2}
                        onChange={onChangeColumns}
                        value={columns}
                    />
                </PanelBody>
            </InspectorControls>
            {/*  */}
            {/*  */}
            {/*  */}

            <div {...useBlockProps({
                className: ` gridcols-editor-${columns} gap-10`
            })}>
                <InnerBlocks
                    allowedBlocks={['create-block/team-member']}
                    template={[
                        ['create-block/team-member'],
                        ['create-block/team-member'],
                    ]}
                />
            </div>
        </>
    );
}

export default withNotices(Edit);