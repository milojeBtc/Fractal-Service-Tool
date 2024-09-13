import {InscribeOrderData} from "../utils/api-types";
import {Button, Divider, Flex} from "antd";
import {useUnisat} from "../provider/UniSatProvider";
import {NetworkType} from "../types";

export function OrderFiles({order}: { order: InscribeOrderData }) {
    const {network} = useUnisat();

    function getLink(inscriptionId: string) {
        return `https://explorer.unisat.io/${network === NetworkType.testnet ? 'fractal-testnet' : 'fractal-mainnet'}/inscription/${inscriptionId}`
    }

    return <>
        <Divider>
            Inscribed Files
        </Divider>
        <Flex vertical justify={'stretch'}>
            {
                order.files.map((file, index) => {
                    return <Flex key={index} justify={'space-between'} align={'center'}>
                        <span>{file.filename}</span>
                        <div>
                            <span>{file.status}</span>
                            {
                                file.inscriptionId
                                &&
                                <Button
                                    type={'link'}
                                    href={getLink(file.inscriptionId)}
                                    target={'_blank'}
                                >
                                    View Inscription
                                </Button>
                            }
                        </div>
                    </Flex>
                })
            }
        </Flex>
    </>
}